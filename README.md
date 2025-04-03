# **Online Complaint Management System**

## **Overview**  
The **Online Complaint Management System** is a web-based platform that allows users to register complaints, track their progress, and get resolutions. The system provides an interactive dashboard for users and authorities, enabling smooth complaint handling.  

## **Features**  
- **Complaint Submission**: Users can file complaints with details like category, description, and location.  
- **Real-time Status Tracking**: Complaints are updated with status changes (Pending, In Progress, Resolved).  
- **Admin Dashboard**: Authorities can manage complaints and update statuses.  
- **Secure API Communication**: RESTful API ensures safe and efficient data handling.  
- **Location-Based Complaint Logging**: Users can specify locations to pinpoint issues accurately.  
- **Responsive UI**: Designed for both desktop and mobile access.  

## **Technologies Used**  
- **Backend**: Spring Boot (for API & business logic)  
- **Database**: MySQL (for complaint records and user data)  
- **Authentication**: JWT-based authentication for secure access  
- **API Requests**: REST APIs (for fetching and updating complaints)  
- **Frontend**: React.js (for an interactive UI)  

## **Project Structure**  

```
Online-Complaint-Management-System/
│── backend/
│   ├── src/main/java/com/complaints/
│   │   ├── config/          # Security & API configuration
│   │   ├── controllers/     # API endpoints for complaints
│   │   ├── services/        # Business logic layer
│   │   ├── repositories/    # Database access layer
│   │   ├── models/          # Entity models
│   │   ├── exceptions/      # Handles API exceptions
│   ├── resources/
│   │   ├── application.properties  # Database & API config
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ComplaintForm.js  # Submit complaints
│   │   │   ├── ComplaintList.js  # List and track complaints
│   │   ├── pages/
│   │   │   ├── Dashboard.js  # User/Admin dashboard
│   │   ├── services/
│   │   │   ├── complaintService.js  # API calls
│   │   ├── App.js  # Main React component
│   │   ├── index.js  # React entry point
│   ├── package.json  # Dependencies
│── README.md  # Project documentation (this file)
```

## **How to Run the Project**  

### **1. Clone the Repository**  
```sh
git clone <repository-url>
cd Online-Complaint-Management-System
```

### **2. Backend Setup (Spring Boot)**  

#### **Install Dependencies & Build**  
```sh
cd backend
mvn clean install
```

#### **Set Up Database** *(Using MySQL/PostgreSQL)*  
Modify the **application.properties** file with your database credentials:  
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/complaints_db
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
```

### **3. Frontend Setup (React.js)**  

#### **Navigate to the frontend directory**  
```sh
cd ../frontend
```

## **Screenshots**  

### **1. Complaint User Login**  
![Screenshot (436)](https://github.com/user-attachments/assets/207dca9f-4afd-4916-8975-98f97e6d0d50)

### **2. Complaint User Complaint Form**  
![Screenshot (437)](https://github.com/user-attachments/assets/9b0a50c7-2363-44a0-bcd9-2aeef6b8f1d6)

### **3. Live Camera Control Form**  
![Screenshot (438)](https://github.com/user-attachments/assets/9cb4f7bb-0801-4989-b02f-9a0319b278b9)

### **4.Admin Login Page**  
![Screenshot (439)](https://github.com/user-attachments/assets/ae92f3ea-e682-44ca-a7fa-cb96059c721c)

### **5.Updated Complaint Data On UserDashBoard**  
![Screenshot (440)](https://github.com/user-attachments/assets/562f6ef2-8918-4e6c-abc6-83359205a8e0)

---

## **Additional Features**  
- **Role-Based Access**: Different views for users and administrators.  
- **Email Notifications**: Users get updates when complaint status changes.  
- **Category-Based Sorting**: Complaints are grouped for better organization.  
- **Location-Based Reports**: Authorities can filter complaints based on affected areas.  

---

## **Future Enhancements**  
✔ **AI-Based Complaint Categorization** – Use NLP to auto-classify complaints.  
✔ **Integration with Google Maps** – Allow users to pin complaint locations.  
✔ **Automated Complaint Resolution Suggestions** – AI-driven suggestions for authorities.  

---

## **Contributors**  
👤 **Priyanshu** – *(Your Name & GitHub Profile Link)*  

---
