import { pool } from "@/database.mjs"

export default async function Page(){
  const r = await pool.query('SELECT * FROM customers')
  const customers = r.rows
  return (
    <div>
      {customers.map((customer) => <li key={customer.id}>{customer.name}</li>)}
    </div>
  )
}