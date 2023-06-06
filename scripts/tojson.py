import csv
import json

def csv_to_json(file): 
    with open(file, newline='\n') as rawc:

        data = []
        s_cache = []

        csv_data = csv.reader(rawc, delimiter=';')
        for row in csv_data:
            if row[0] not in s_cache:
                s_cache.append(row[0])
                data.append({
                    "title": row[0].capitalize(),
                    "items": [],
                })
            data[len(data) - 1]["items"].append({
                "title": row[1].capitalize().strip(),
                "price": int(float(row[2]) * 100),
                "description": row[3].lower(),
            })

        with open(file.replace("csv", "json"), 'w') as f:
            f.write(json.dumps({ "sections": data }))

csv_to_json("food.csv")
csv_to_json("drinks.csv")