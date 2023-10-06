import {prisma} from '@/libs/prisma'
import TaskCard from '@/components/TaskCard';

async function loadTask() {
  //obteniendo de la base de datos (en este enfoque consulto la base de datos)
  //const res = await fetch('http://localhost:3000/api/tasks')
  //const data = await res.js on()
  //console.log(data) 
  
  //haciendo una petición HTTP api/tasks (en este enfoque me comunico con mi propio backend)
  return await prisma.task.findMany()
  
}

export const revalidate = 60;

async function HomePage() {
  
  const tasks = await loadTask();
  console.log(tasks);
  
  return(
    <section className='container mx-auto'>
      <div className='grid grid-cols-3 gap-3 mt-10'>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} /> 
      ))}
    </div>
    </section>
  )
}
export default HomePage;