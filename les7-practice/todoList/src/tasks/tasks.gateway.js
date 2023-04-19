const baseUrl = 'https://639acdd831877e43d676cd31.mockapi.io/logins';

export const fetchCreateTask = async (taskData) => {
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    });
    if (!response.ok) {
      throw new Error('Failed to create task');
    }
  } catch (err) {
    console.log(err);
  }
};

export const fetchUpdateTask = async (taskData, taskId) => {
  try {
    const response = await fetch(`${baseUrl}/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    });
    if (!response.ok) {
      throw new Error('Failed to update task');
    }
  } catch (err) {
    console.log(err);
  }
};

export const fetchDeleteTask = async (taskId) => {
  try {
    const response = await fetch(`${baseUrl}/${taskId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  } catch (err) {
    console.log(err);
  }
};

export const fetchTasks = async () => {
  try {
    const resp = await fetch(baseUrl);
    if (resp.ok) {
      const response = await resp.json();
      return response;
    }
  } catch (err) {
    console.log(err);
  }
};
