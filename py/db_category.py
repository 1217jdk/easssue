# -*- coding: cp949 -*-



import mysql.connector
from mysql.connector import IntegrityError
from _mysql_connector import MySQLInterfaceError
import pandas as pd
mysql_df = pd.read_csv(f'/Users/SSAFY/Data/data/mysql.csv')
password = mysql_df.loc[0,'password']
mydb = mysql.connector.connect(
  host="www.easssue.com",
  user="root",
  password=password,
  database="easssue_data"
)

mycursor = mydb.cursor()


sql = "INSERT INTO category (category_id, category_name) VALUES (%s, %s)"

name_id = {'IT/과�??': 1, '경�??':2 ,  '문�??/?���??' : 3 , '미용/건�??':4,   '?���?':5, '?�포�?':6, '?��??':7, '??��??':8}

for category_name, category_id in name_id.items():
    category_id = str(category_id)
    val = (category_id, category_name)
    
    try :
        mycursor.execute(sql, val)
        print(category_id, category_name, "record inserted")
        
    except IntegrityError as e:
        print("error is : ", e, "category is : ", category_id, category_name)



mydb.commit()


