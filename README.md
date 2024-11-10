# Programming-Studio-1-COSC2803
Waste Management and Recycling Data Platform: UX/UI and Database Architecture Report

Project Overview
This is a web-based project to visualize some waste management and recycling data around different regions. It allows, among other things, access to figures regarding waste composition and recycling backdrop of collected/recycled amounts on recycling prices giving users better views into the trends of waste about the regional performance. It has interactive tiles, graphs, and filters that allow for a more granular view of recycling data at an LGA (Local Government Area) level.
Features
1.	Over View Page: Interactive charts present trends in waste and recycling data.
2.	Detail Page: Offers an in-depth perspective on individual metrics and patterns.
3.	Advanced Filtering: Enables users to filter data through the year, LGA, waste category, and waste sub-category.
4.	CSV and PDF Export: Users can export for offline analysis.
Technologies Used
•	Frontend: HTML CSS JS Chart js for data visualization.
•	Backend: Node. ExpressJs — API handling with js.
•	Database: SQLite — data storage and retrieval.
•	JS Libraries: jsPDF for converting JSON data into PDF and Chart. Js for interactive charts.
Project Structure
•	Project-Folder
o	server.js (node.api endpoints, server file) 
o	wastemanagement.db (database file)
o	readme.md (Readme file for the project)
o	public
	index.html (Landing Page)
	dataoverview.html (include filter,chart)
	detail.html (table, export)
	style.css (styling pages)
Setup Instructions
Prerequisites
•	Node. Js and npm pre-installed on your pc
•	SQLite for database management.
•	Installation
Usage
Home Page (index. html): This is the starting point for navigating to Data Overview or Detail pages

