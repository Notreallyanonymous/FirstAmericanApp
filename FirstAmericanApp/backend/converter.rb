require 'csv'
require 'json'

batches = []
count = 25
CSV.read("metrics.csv","r:ISO-8859-1", headers: true).each do |line|
  if count == 25
    batches.push({"dbb-metrics-DynamoDBTable-4N2XJFR8ZCXQ" => []})
    count = 1 
  end
  
  batches.last["dbb-metrics-DynamoDBTable-4N2XJFR8ZCXQ"].push({
    "PutRequest" => {
      "Item" => {
        "Date"   => { "S" => line['Date']},
        "Agent"   => { "S" => line['Agent']},
        "Avaya"   => { "S" => line['Avaya']},
        "Sch hours" => { "N" => line['Sch hours']},
        "Hours in adh" => { "N" => line['Hours in adh']},
        "Adherence" => { "N" => line['Adherence']}
      }
    }
  })
  count = count + 1
end

batches.each_with_index do |batch,i|
  json = JSON.pretty_generate batch
  File.write "batches/batch-#{i.to_s.rjust(3,'0')}.json", json
end