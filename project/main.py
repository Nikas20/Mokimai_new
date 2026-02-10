students = [
    {
        "id": "S001",
        "name": "Jonas",
        "grades": [8, 9, 9],
        "courses": {"Matematika", "Programavimas"},
        "attendance": (18, 20)
    },
    {
        "id": "S002",
        "name": "Asta",
        "grades": [9, 7, 9],
        "courses": {"Programavimas"},
        "attendance": (20, 20)
    }
]

def get_student_input():
    print("=== Student Registration ===")

    id = input("Enter student ID: ")
    name = input("Enter student name: ")

    grades_input = input("Enter grades (comma separated): ")
    grades = [int(g.strip()) for g in grades_input.split(",") if g.strip()]

    courses_input = input("Enter courses (comma separated): ")
    courses = {c.strip() for c in courses_input.split(",") if c.strip()}

    attended = int(input("Enter attended classes: "))
    total = int(input("Enter total classes: "))
    attendance = (attended, total)

    return {
        "id": id,
        "name": name,
        "grades": grades,
        "courses": courses,
        "attendance": attendance
    }

def add_student():
    id, name, grades, courses, attendance = get_student_input()

    return { "id": id,
    "name": name,
    "grades": grades,
    "courses": courses,
    "attendance": attendance
    }

def add_grade(students):

    choise_student = input("Enter student ID: ")

    for student in students:
        if student["id"] == choise_student:

            grades_input = input("Enter grades (comma separated): ")
            new_grades = [int(g.strip()) for g in grades_input.split(",") if g.strip()]
            student["grades"].extend(new_grades)
            return
        
        print("Invalid student ID")
        return
    


def add_course(students):
    choise_student = input("Enter student ID: ")

    for student in students:
        if student["id"] == choise_student:

            courses_input = input("Enter courses (comma separated): ")
            new_courses = {c.strip() for c in courses_input.split(",") if c.strip()}
            student["courses"].update(new_courses)
            return
        
        print("Invalid student ID")
        return
    


def student_report(students):

    choise_student = input("Enter student ID: ")

    for student in students:
        if student["id"] == choise_student:
            
            grades = student["grades"]
            average = sum(grades) / len(grades) if grades else 0
            status = "PASS" if average >= 5 else "FAIL"

    print("+----------------------+----------------------+")
    print(f"| {'Field':<20} | {'Value':<20} |")
    print("+----------------------+----------------------+")
    print(f"| {'ID':<20} | {student['id']:<20} |")
    print(f"| {'Name':<20} | {student['name']:<20} |")
    print(f"| {'Average':<20} | {average:<20.2f} |")
    print(f"| {'Status':<20} | {status:<20} |")
    print("+----------------------+----------------------+")

def course_statistics(students):
    course_stats = {}

    for student in students:
        for course in student["courses"]:
            if course not in course_stats:
                course_stats[course] = 0

            course_stats[course] += 1
            

    print("\n=== Course Statistics ===")
    if not course_stats:
        print("No courses found.")
    else:
        for course, count in course_stats.items():
            print(f"{course}: {count} student(s)")

def failing_students(students):
    failing_students = []

    for student in students:
        grades = student["grades"]
        average = sum(grades) / len(grades) if grades else 0
        status = "PASS" if average >= 5 else "FAIL"

        if status == "FAIL":
            failing_students.append(student["id"])
    if len(failing_students) == 0:
        print("No students failed")
    else:
        print(failing_students)


def run_action(action, students):
    if action == add_student:
        new_student = add_student()
    
        if new_student is not None:
            students.append(new_student)
            print("Registration successful")
    else:
        action(students)


# students = []
running = True

actions = {
    1: add_student,
    2: add_grade,
    3: add_course,
    4: student_report,
    5: course_statistics,
    6: failing_students,
}

while running:
    print("\n=== MENU ===")
    print("0. Exit")
    print("1. Add student")
    print("2. Add grade")
    print("3. Add course")
    print("4. Student report")
    print("5. Course statistics")
    print("6. Failing students")


    

    choice = int(input("Choose an option (0-6): "))

    if choice == 0:
        print("Exiting program.")
        running = False
        continue

    action = actions.get(choice)

    if action is None:
        print("Invalid option. Please choose 0-6")
        continue

    run_action(action, students)