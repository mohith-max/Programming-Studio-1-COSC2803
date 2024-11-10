# Programming-Studio-1-COSC2803
Waste Management and Recycling Data Platform: UX/UI and Database Architecture Report<br>

# Project Overview<br>
This is a web-based project to visualize some waste management and recycling data around different regions. It allows, among other things, access to figures regarding waste composition and recycling backdrop of collected/recycled amounts on recycling prices giving users better views into the trends of waste about the regional performance. It has interactive tiles, graphs, and filters that allow for a more granular view of recycling data at an LGA (Local Government Area) level.<br>
# Features<br>
1.	Over View Page: Interactive charts present trends in waste and recycling data.<br>
2.	Detail Page: Offers an in-depth perspective on individual metrics and patterns.<br>
3.	Advanced Filtering: Enables users to filter data through the year, LGA, waste category, and waste sub-category.<br>
4.	CSV and PDF Export: Users can export for offline analysis.<br>
# Technologies Used<br>
•	Frontend: HTML CSS JS Chart js for data visualization.<br>
•	Backend: Node. ExpressJs — API handling with js.<br>
•	Database: SQLite — data storage and retrieval.<br>
•	JS Libraries: jsPDF for converting JSON data into PDF and Chart. Js for interactive charts.<br>
# Project Structure<br>
•	Project-Folder<br>
o	server.js (node.api endpoints, server file) <br>
o	wastemanagement.db (database file)<br>
o	readme.md (Readme file for the project)<br>
o	public<br>
	index.html (Landing Page)<br>
	dataoverview.html (include filter,chart)<br>
	detail.html (table, export)<br>
	style.css (styling pages)<br>
## Setup Instructions<br>
# Prerequisites<br>
•	Node. Js and npm pre-installed on your pc<br>
•	SQLite for database management.<br>
•	Installation<br>
# Usage<br>
Home Page (index. html): This is the starting point for navigating to Data Overview or Detail pages<br>

