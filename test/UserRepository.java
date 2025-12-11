package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class UserRepository {
    
    private static final String apiKey = "sk-1234567890abcdef";  // Hardcoded API key
    private static final String password = "admin123";  // Hardcoded password
    
    public void getAllUsers() {
        try {
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/db");
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM users");  // SELECT *
            
            while (rs.next()) {
                System.out.println("User: " + rs.getString("name"));  // System.out
            }
            // No resource cleanup - connection leak!
            
        } catch (Exception e) {
            e.printStackTrace();  // Should use logger
        }
    }
    
    public boolean validateUser(String username) {
        String currentUser = getCurrentUser();
        return username.equals(currentUser);  // NPE if currentUser is null
    }
    
    public void processInBackground() {
        new Thread(() -> {  // Thread creation without proper management
            // TODO: Fix this security issue
            System.out.println("Processing...");
        }).start();
    }
    
    private String getCurrentUser() {
        return null;  // Simulated
    }
}
