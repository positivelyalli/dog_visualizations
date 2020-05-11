# data_wrangling
UCB Data Analytics Boot Camp, week 17 visualization group project, data wranging section

Data Clean Up<br>
This was achieved first by cleansing our NYC dog licenses data. We restricted our view to 2016, removed records with any null values in relevant fields, and normalized breed and borough names by mapping (replacing) raw values. A breed-to-breed-group relationship table and breed-stats tables were created with data primarily from the American Kennel Club and Google search results.<br>
See: data_cleanup.ipynb

SQLite Database<br>
The licenses, breed-to-breed-group, and breed-stats CSVs were loaded into tables within a SQLite database.<br>
See: create_sqlite_db.py, dog_data.sqlite

Flask<br>
Originally, the tables were used to create two views that could be exported as CSVs and used by the team. On recommendation from the teacher, we changed our approach to make the view-like data accessible via a flask.<br>
See: app.py