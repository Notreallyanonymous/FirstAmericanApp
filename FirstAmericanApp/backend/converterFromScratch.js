import {DynamoDBClient, GetItemCommand} from '@aws-sdk/client-dynamodb'
const ddbClient = new DynamoDBClient({region: "us-west-1"})

const getItem = async () =>{
    const params ={
        TableName: "dbb-starShips-DynamoDBTable-ITDJLPHAMGGD",
        Key: {
            ShipClass: {S: "Constellation"}, 
            Registry: { S: "NCC-3890" }
        }

    }
    try{
        const data = await ddbClient.send(new GetItemCommand(params))
        console.log(data)
    }catch(error){
        console.log(error)
    }

}

getItem()