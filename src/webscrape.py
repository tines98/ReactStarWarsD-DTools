import requests
from bs4 import BeautifulSoup
from requests_html import HTMLSession

session = HTMLSession()

r = session.get('https://sw5e.com/loot/weapons')

r.html.render()  # this call executes the js in the page


# data = requests.get("https://sw5e.com/loot/armor")

# if data.status_code == 200:
#     print('Success!')
# elif data.status_code == 404:
#     print('Not Found.')

# soup = BeautifulSoup(data,'html.parser')
# print(soup)
# data_table = soup.find('tbody')
# print(data_table)
# rows = data.find_all('tr')
# print(rows)
# datalist = []
# for row in rows:
#     rowlist = []
    
#     try:
#         tds = row.find_all('td')
#         for td in tds:
#             rowlist.append(td.text)
#         datalist.append(','.join(rowlist))
#     except:
#         pass
# print('\n'.join(datalist))