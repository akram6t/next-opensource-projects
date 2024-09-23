import React from 'react';

const UserTable: React.FC = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
    // Add more mock users as needed
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-muted">
        <thead className="bg-background">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Role</th>
          </tr>
        </thead>
        <tbody className="bg-base divide-y divide-muted">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;