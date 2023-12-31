import './styles.css';
import React, { useState } from 'react';

function App() {
  const [habits, setHabits] = useState([]);

  // Function to add a new habit
  const addHabit = (habit) => {
    setHabits([...habits, { text: habit, tracked: true, activity: [] }]);
  };

  // Function to delete a habit
  const deleteHabit = (index) => {
    const updatedHabits = [...habits];
    updatedHabits.splice(index, 1);
    setHabits(updatedHabits);
  };

  // Function to handle activity status update
  const handleActivityUpdate = (habitIndex, day, status) => {
    const updatedHabits = [...habits];
    const habit = updatedHabits[habitIndex];
    const activity = habit.activity.find((item) => item.day === day);
    if (activity) {
      activity.status = status;
    } else {
      habit.activity.push({ day, status });
    }
    setHabits(updatedHabits);
  };

  // Function to get the last seven days
  const getLastSevenDays = () => {
    const today = new Date();
    const lastSevenDays = [];
    for (let i = 6; i >= 0; i--) {
      const day = new Date(today);
      day.setDate(today.getDate() - i);
      const formattedDay = day.toISOString().split('T')[0];
      lastSevenDays.push(formattedDay);
    }
    return lastSevenDays;
  };

  return (
    <div className="app-container">
      <h1>Habit Tracking App</h1>
      <h2>Developed by - ARPAN CHOUDHURY(Contact Email - arpanchoudhury@gmail.com)</h2>
      <p>Welcome Users to this Web App that helps you to track your daily and weekly Habits.</p>
      <AddHabitForm addHabit={addHabit} />
      <h2>List of Habits</h2>
      {habits.length > 0 ? (
        <div className="habit-list">
          {habits.map((habit, habitIndex) => (
            <div className="habit-item" key={habitIndex}>
              <span className={habit.tracked ? 'habit-text' : 'habit-text untracked'}>
                {habitIndex + 1}. {habit.text}
              </span>
              <div className="activity-table">
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getLastSevenDays().map((day) => {
                      const activity = habit.activity.find((item) => item.day === day);
                      const status = activity ? activity.status : 'Unvisited';
                      return (
                        <tr key={day}>
                          <td>{day}</td>
                          <td>
                            <select
                              value={status}
                              onChange={(e) =>
                                handleActivityUpdate(habitIndex, day, e.target.value)
                              }
                            >
                              <option value="Done">Done</option>
                              <option value="Not Done">Not Done</option>
                              <option value="Unvisited">Unvisited</option>
                            </select>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <button className="btn2" onClick={() => deleteHabit(habitIndex)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No Habits Present for Tracking</p>
      )}
    </div>
  );
}

// Component for adding a new habit
const AddHabitForm = ({ addHabit }) => {
  const [habit, setHabit] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (habit.trim() !== '') {
      addHabit(habit);
      setHabit('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder="Enter a habit"
      />
      <button type="submit">Add Habit To Track</button>
    </form>
  );
};

export default App;


