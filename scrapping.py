import requests
from bs4 import BeautifulSoup
import json

url = "https://www.codewithharry.com/"

r = requests.get(url)

htmlContent = r.content

soup = BeautifulSoup(htmlContent, 'html.parser')


#goona work with
#1) Tag print(type(title))
#2) NavaigableString print(type(title.string))
#3) BeautifulSoup print(type(soup))
#4) Comment

# print(soup.prettify)
# print(htmlContent)


#get the title of the Html page
title=soup.title
# print(title)


#get all the paragraphs of the Html page
paras = soup.find_all('p')
# print(paras)

#get all the anchors tags from the Html page
anchor = soup.find_all('a')
# print(anchor)


#to get the fist paragraph of the Html page
print(soup.find('p'))

#get classes of any elements in the Html Page
print(soup.find('p')['class'])

#find all the elements with the same class name
print(soup.find_all("p", class_ = "md:text-base"))


# Sample data
data = {'name': 'John', 'age': 30, 'city': 'New York'}

# Convert data to JSON format
json_data = json.dumps(data)

# Print the JSON data
print(json_data)

# Sample data in file
with open('data.txt', 'w') as f:
    f.write('{"name": "John", "age": 30, "city": "New York"}')

# Convert data to JSON format
with open('data.txt', 'r') as f:
    data = json.load(f)

# Print the JSON data
print(data)