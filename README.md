# Visualizing Dog Breed Popularity in NY for 2016

Everyone has their favorite dog breed. This project strives to show which are the most popular breeds and breed groups in the New York City area, including all 5 boroughs. There are 2 visulazations of this data, which includes a chloropleth map of the New York area with the number of dogs indicated by the color range and a circle pack showing the number of licenses for a breed and it's AKC breed group. 

### Circle Pack

#### Prerequisites
Data must be in the proper format to be able to parse it for the visualization.

#### Steps
1. Set variables for width, height and data
2. SVG: Append using d3 while setting the width and height attributes set a variable
3. G Group: Select using d3 and append 'g'
4. Get data from the source: csv, json, API.
5. Pass the data to stratify which creates heirarchies in the data.
    * Assign parent and child columns
5. If data is in a CSV Pass the data to stratify which creates hierarchies in the data.
6. If data is another format use the unpack function to display the data.
7. Create circle pack.

### Data Wrangling
UCB Data Analytics Boot Camp, week 17 visualization group project, data wranging section

Data Clean Up<br>
This was achieved first by cleansing our NYC dog licenses data. We restricted our view to 2016, removed records with any null values in relevant fields, and normalized breed and borough names by mapping (replacing) raw values. A breed-to-breed-group relationship table and breed-stats tables were created with data primarily from the American Kennel Club and Google search results.<br>
See: data_cleanup.ipynb

SQLite Database<br>
The licenses, breed-to-breed-group, and breed-stats CSVs were loaded into tables within a SQLite database.<br>
See: create_sqlite_db.py, dog_data.sqlite

Flask<br>
Originally, the tables were used to create two views that could be exported as CSVs and used by the team. On recommendation from the teacher, we changed our approach to make the view-like data accessible via a flask.<br>

## Built With

* [Bootstrap](link to download here) - The web framework used
* [D3.js](link to download here) - Used to create visualizations



## Authors

* **Alli Kruger** - *Circle Pack Creation & Interactions* 
* **Bradley Weintraub** - *Data Wrangling & Choropleth* 
* **Jason Fung** - *Data Wrangling, SQL & Flask App* 
* **Richard Wendel** - *HTML & CSS*  

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

