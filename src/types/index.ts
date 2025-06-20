export interface Student {
  id: string;
  name: string;
  email: string;
  studentId: string;
  department: string;
  faculty: string;
  level: number;
  semester: number;
  gpa: number;
  courses: CourseGrade[];
}

export interface Lecturer {
  id: string;
  name: string;
  email: string;
  staffId: string;
  department: string;
  faculty: string;
  courses: string[];
  rating: number;
  studentsCount: number;
}

export interface CourseGrade {
  courseCode: string;
  courseName: string;
  grade: string;
  score: number;
  semester: number;
  level: number;
}

export interface Department {
  id: string;
  name: string;
  faculty: string;
  studentCount: number;
  lecturerCount: number;
  averageGpa: number;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  category: 'academic' | 'event' | 'announcement';
  featured: boolean;
}

export interface PerformanceData {
  course: string;
  score: number;
  students: number;
  semester: string;
}