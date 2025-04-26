import java.sql.*;

public class Main {

    private static final String url = "jdbc:mysql://localhost:3306/mydb";
    private static final String username = "root";
    private static final String password = "Gaurav#123@";

    public static void main(String[] args) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        }
        catch(ClassNotFoundException e){
            System.out.println(e.getMessage());
        }

        try{
            Connection connection = DriverManager.getConnection(url, username, password);
            Statement statement = connection.createStatement();

            // for data retrieval we use method .executeQuery(String query)
            // and for update (ex. insert, update , delete) we use .executeUpdate(String query);


            // To Get (Read)
//            String query = "select * from students";

//            ResultSet resultSet = statement.executeQuery(query);

//            while(resultSet.next()){
//                int id = resultSet.getInt("id");
//                String name = resultSet.getString("name");
//                int age = resultSet.getInt("age");
//                Double marks = resultSet.getDouble("marks");
//
//                System.out.println("ID : "+id);
//                System.out.println("Name : "+name);
//                System.out.println("Age : "+age);
//                System.out.println("Marks : "+marks);
//                System.out.println("_____");
//            }

            // To Insert (Create)
//
//            String query = String.format("INSERT INTO students(name, age, marks) VALUES('%s', %o, %f)", "Mohan", 45, 76.3);
//            int rowsAffected = statement.executeUpdate(query);
//            if(rowsAffected>0){
//                System.out.println("Data inserted successfully");
//            }
//            else{
//                System.out.println("Data not inserted");
//            }
//        }
//        catch(SQLException e){
//            System.out.println(e.getMessage());


            // To Update (Update)

//            String query = String.format("UPDATE students SET name = '%s' WHERE id = %o", "Mohit", 4);
//            int rowsAffected = statement.executeUpdate(query);
//            if(rowsAffected>0){
//                System.out.println("Data updated successfully");
//            }
//            else{
//                System.out.println("Data not updated");
//            }

            // To Delete (Deletion)

            String query = String.format("DELETE FROM students WHERE id = %o;", 2);
            int rowsAffected = statement.executeUpdate(query);
            if(rowsAffected>0){
                System.out.println("Data deleted successfully");
            }
            else{
                System.out.println("Data not deleted");
            }


        }
        catch(SQLException e){
            System.out.println(e.getMessage());
        }
    }
}