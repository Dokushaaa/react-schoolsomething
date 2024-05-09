<?php

Class Teacher {
    public $teacher_aid;
    public $teacher_name;
    public $teacher_class;
    public $teacher_gender;
    public $teacher_email;
    public $teacher_age;
    public $teacher_is_active;
    public $teacher_created;
    public $teacher_datetime;
    
    public $connection;
    public $lastInsertedId;
    public $tblTeacher;

    public function __construct($db) {
        $this->connection = $db;
        $this->tblTeacher = "react_school_teacher";
    }

    public function create() {
        try {
            // next teacher is uppercase
             $sql = "insert into {$this->tblTeacher} ";
             $sql .= "( teacher_name, ";
             $sql .= "teacher_class, ";
             $sql .= "teacher_gender, ";
             $sql .= "teacher_email, ";
             $sql .= "teacher_age, ";
             $sql .= "teacher_is_active, ";
             $sql .= "teacher_created, ";
             $sql .= "teacher_datetime ) values ( ";
             $sql .= ":teacher_name, ";
             $sql .= ":teacher_class, ";
             $sql .= ":teacher_gender, ";
             $sql .= ":teacher_email, ";
             $sql .= ":teacher_age, ";
             $sql .= ":teacher_is_active, ";
             $sql .= ":teacher_created, ";
             $sql .= ":teacher_datetime ) ";
             $query = $this->connection->prepare($sql);
             $query->execute([
                "teacher_name" => $this->teacher_name,
                "teacher_class" => $this->teacher_class,
                "teacher_gender" => $this->teacher_gender,
                "teacher_email" => $this->teacher_email,
                "teacher_age" => $this->teacher_age,
                "teacher_is_active" => $this->teacher_is_active,
                "teacher_created" => $this->teacher_created,
                "teacher_datetime" => $this->teacher_datetime,
             ]);
        $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        
        return $query;
    }
    
    public function readAll()
    {
        try {
            $sql = "select * ";
            // next teacher is uppercase
            $sql .= "from {$this->tblTeacher} ";
            $sql .= "order by teacher_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function delete()
    {
        try {
            // next teacher is uppercase
            $sql = "delete from {$this->tblTeacher} ";
            $sql .= "where teacher_aid = :teacher_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "teacher_aid" => $this->teacher_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function update()
    {
        try {
            // next teacher is uppercase
            $sql = "update {$this->tblTeacher} set ";
            $sql .= "teacher_name = :teacher_name, ";
            $sql .= "teacher_age = :teacher_age, ";
            $sql .= "teacher_class = :teacher_class, ";
            $sql .= "teacher_gender = :teacher_gender, ";
            $sql .= "teacher_email = :teacher_email, ";
            $sql .= "teacher_datetime = :teacher_datetime ";
            $sql .= "where teacher_aid  = :teacher_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "teacher_name" => $this->teacher_name,
                "teacher_age" => $this->teacher_age,
                "teacher_class" => $this->teacher_class,
                "teacher_gender" => $this->teacher_gender,
                "teacher_email" => $this->teacher_email,
                "teacher_datetime" => $this->teacher_datetime,
                "teacher_aid" => $this->teacher_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function active()
    {
        try {
            // next teacher is uppercase
            $sql = "update {$this->tblTeacher} set ";
            $sql .= "teacher_is_active = :teacher_is_active, ";
            $sql .= "teacher_datetime = :teacher_datetime ";
            $sql .= "where teacher_aid  = :teacher_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "teacher_is_active" => $this->teacher_is_active,
                "teacher_datetime" => $this->teacher_datetime,
                "teacher_aid" => $this->teacher_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    // edit later
    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblStudent} ";
            $sql .= "where student_name like :student_name ";
            $sql .= "order by student_is_active desc, ";
            $sql .= "student_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "student_name" => "%{$this->student_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}