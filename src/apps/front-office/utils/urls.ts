// append urls here, DO NOT remove this line

const URLS = {
  home: "/",
  notFound: "/404",
  internships: "/internships",
  viewInternRoute: "/internships/:id",
  viewIntern: (intern: any) => `/internships/${intern?.id}`,
  jobs: "/jobs",
  viewJobRoute: "/jobs/:id",
  viewJob: (job: any) => `/jobs/${job?.id}`,
  courses: "/courses",
  bigCourses: "/big-courses",
  viewCourseRoute: "/courses/:id",
  viewBigCourseRoute: "/big-courses/:id",
  viewCourse: (course: any) => `/courses/${course?.id}`,
  // : "/courses/:id",
  viewBigCourses: (bigCourses: any) => `/big-courses/${bigCourses?.id}`,
  auth: {
    login: "/login",
    register: "/register",
  },
};

export default URLS;
