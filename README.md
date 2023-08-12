# An Inventory Management App 

## Live Link - 
https://inventory-managment1.netlify.app/department

## Pages & Features
1. Inventory Dashboard: The dashboard provides an overview of inventory levels, including the total stock count, low-stock items, and items delivered till now.
   
2. Departments Page: This page show different inventory departments within the business. Users can view each department's inventory by clicking on the Department cards and navigating to that specific product lists.
  The different departments are:
  
  - Kitchen
  - Clothing
  - Toys
    
3. Product List Page: This page displays a list of products within a chosen department. User can filter and sort products based on different attributes.
The diffrent filters are:
  - Filter by department using dropdown - All departments, kitchen, clothing, toys
  - Filter by low stock - Using checkbox
  - Sort by Name, Price and Stock using dropdown
    
4. Add New Product: Users can add new products to the inventory by clicking on the ‘New’ button on product list page. The New products can be added with attributes like department, product name, description, price, stock (quantity), SKU (stocking unit), supplier name, items delivered (keep 0 when adding new product) and item image url.
   
5. The added product Data persist after relaod (using localStorage)

6. Product Detail Page: Individual pages of every product. Users can navigate to a detailed product page from the products list. This page has extensive information about the selected product, including its attributes, current stock level, and supplier name, etc.

