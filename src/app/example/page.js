import React from 'react'
import Footer from '../components/Footer'

const page = ({ product }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-pink-500 text-white w-64 flex-shrink-0">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Accusoft</h1>
        </div>
        <nav>
          <ul>
            <li className="px-6 py-2 hover:bg-pink-600">Dashboard</li>
            <li className="px-6 py-2 hover:bg-pink-600">Customers</li>
            <li className="px-6 py-2 hover:bg-pink-600">Projects</li>
            <li className="px-6 py-2 hover:bg-pink-600">Orders</li>
            <li className="px-6 py-2 hover:bg-pink-600">Inventory</li>
            <li className="px-6 py-2 hover:bg-pink-600">Accounts</li>
            <li className="px-6 py-2 hover:bg-pink-600">Tasks</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="bg-gray-100 flex-grow p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <input
            type="text"
            placeholder="Search here"
            className="border px-4 py-2 rounded-lg"
          />
        </header>

        {/* Statistics Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold">54</h3>
            <p>Customers</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold">79</h3>
            <p>Projects</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold">124</h3>
            <p>Orders</p>
          </div>
          <div className="bg-pink-500 text-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold">$6k</h3>
            <p>Income</p>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Recent Projects</h3>
            <a href="#" className="text-pink-500">
              See all →
            </a>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="pb-4">Project Title</th>
                <th className="pb-4">Department</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">UI/UX Design</td>
                <td className="py-2">UI Team</td>
                <td className="py-2 text-purple-500">Review</td>
              </tr>
              <tr>
                <td className="py-2">Web Development</td>
                <td className="py-2">Frontend</td>
                <td className="py-2 text-pink-500">In Progress</td>
              </tr>
              <tr>
                <td className="py-2">Ushop App</td>
                <td className="py-2">Mobile Team</td>
                <td className="py-2 text-orange-500">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* New Customers */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">New Customers</h3>
            <a href="#" className="text-pink-500">
              See all →
            </a>
          </div>
          <ul>
            <li className="flex items-center justify-between py-2 border-b">
              <div>
                <h4 className="font-bold">Lewis S. Cunningham</h4>
                <p className="text-sm text-gray-500">CEO Excerpt</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 bg-gray-100 rounded-lg">📞</button>
                <button className="p-2 bg-gray-100 rounded-lg">💬</button>
                <button className="p-2 bg-gray-100 rounded-lg">📧</button>
              </div>
            </li>
            {/* Add more customer items here */}
          </ul>
        </div>
      </main>
    </div>
  );
};


export default page
