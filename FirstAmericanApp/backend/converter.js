import {DynamoDBClient, GetItemCommand} from '@aws-sdk/client-dynamodb'

function multiWrite(table, data, cb) {
    var AWS = require('aws-sdk');
    var db = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

    // Build the batches
    var batches = [];
    var current_batch = [];
    var item_count = 0;
    for(var x in data) {
        // Add the item to the current batch
        item_count++;
        current_batch.push({
            PutRequest: {
                Item: data[x]
            }
        });
        // If we've added 25 items, add the current batch to the batches array
        // and reset it
        if(item_count%25 == 0) {
            batches.push(current_batch);
            current_batch = [];
        }
    }
    // Add the last batch if it has records and is not equal to 25
    if(current_batch.length > 0 && current_batch.length != 25) batches.push(current_batch);

    // Handler for the database operations
    var completed_requests = 0;
    var errors = false;
    function handler(request) {
        return function(err, data) {
            // Increment the completed requests
            completed_requests++;

            // Set the errors flag
            errors = (errors) ? true : err;

            // Log the error if we got one
            if(err) {
                console.error(JSON.stringify(err, null, 2));
                console.error("Request that caused database error:");
                console.error(JSON.stringify(request, null, 2));
            }

            // Make the callback if we've completed all the requests
            if(completed_requests == batches.length) {
                cb(errors);
            }
        }
    }

    // Make the requests
    var params;
    for(x in batches) {
        // Items go in params.RequestItems.id array
        // Format for the items is {PutRequest: {Item: ITEM_OBJECT}}
        params = '{"RequestItems": {"' + table + '": []}}';
        params = JSON.parse(params);
        params.RequestItems[table] = batches[x];

        // Perform the batchWrite operation
        db.batchWrite(params, handler(params));
    }
}