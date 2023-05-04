# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: We would generate a rails migration that adds a id to the cohort table. The name would be cohort_id. It would be on the student model. This actually happened to me twice on two rails projects we worked on. I created a new column and migrated it onto the 2nd table to reference the first table. On our credit card table each user had many credit cards but I forgot to add an ID so that I could add multiple credit cards to each user.

Researched answer: To fix this, we need to add a foreign key to the students table. To add the key to the students table we need to creat a migration. Rails g migration add_cohort_id_to_students cohort:references would be the command we use to add a cohort id column to the students table as a foreign key referencing the cohorts table. We can then run rails db:migrate.

2. Which RESTful routes must always be passed params? Why?

Your answer: Update, when you add an update action you need to have its own route. 

Researched answer:In RESTful routing some routes require paramters to be passed in the request. These are used to identify specific resources. They must be passed for the request. Routes that alwyas require paramaters are the ones the perform actions on specifc resources. Example editing or deleting.

3. Name three rails generator commands. What is created by each?

Your answer: Rails generate model, makes the table and the columns in the table.
(thats probably the only one I can name off the top of my head)

Researched answer: Rails Generate Resource, this will create everything generate model does but also creates a resource in the routes.rb file. You can also assign foerign keys. Rails destroy, this will go through every path generate used but destroy it instead. Rails generate controller, this will create a new controller file. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Index, retrieve a list of students
action: "POST" location: /students
Create, make a new student
action: "GET" location: /students/new
New, bring up the form to add a new student
action: "GET" location: /students/2
Show, would retrieve the details of the student with the id "2"
action: "GET" location: /students/2/edit
Edit, edit the student with the id of "2"
action: "PATCH" location: /students/2
Update, update the student at id "2" and then show that student
action: "DELETE" location: /students/2
Destroy,the student with the id of "2"
5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I want to be able to create new to-do items
2. As a user my to-do items should have descriptions
3. As a user my I should be able to see when my to-do items are due
4. As a user I want to be able to set priority to each item
5. As a user I want to be able to mark when an item is done
6. As a user I want to recieve reminders of a task
7. As a user I want to be able to edit a task
8. As a user I want to be able to delete a task
9. As a user I want to be able to search through my tasks
10. As a user I want to create recurring tasks