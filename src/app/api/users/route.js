export async function GET(req, res, next) {

   const users = [
      {
         id: 1,
         name: 'John Doe',
         email: 'jhon@gmail.com'
      },
      {
         id: 2,
         name: 'Grover Cleveland',
         email: 'grover@gmail.com'
      },
      {
         id: 3,
         name: 'John Doe',
         email: 'jhon@gmail.com'
      }
   ]

   const data = JSON.stringify(users)

   return new Response(data)

}