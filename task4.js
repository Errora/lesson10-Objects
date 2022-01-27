const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

function giveJobToStudent(student, jobName) {
  alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`);
  let updatedStudent = {
    ...student,
    job: jobName,
  };
  return updatedStudent;
};


const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
