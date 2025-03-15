import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
} from '@mui/material';
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Check as CheckIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';

const TaskManager = ({ darkMode }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'medium',
    status: 'todo',
    dueDate: '',
  });
  const [editingTask, setEditingTask] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddTask = () => {
    if (!newTask.title.trim()) {
      toast.error('Please enter a task title');
      return;
    }

    const task = {
      id: Date.now(),
      ...newTask,
      createdAt: new Date().toISOString(),
    };

    setTasks((prev) => [task, ...prev]);
    setNewTask({
      title: '',
      description: '',
      priority: 'medium',
      status: 'todo',
      dueDate: '',
    });
    toast.success('Task added successfully!');
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
    toast.success('Task deleted successfully!');
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setNewTask(task);
  };

  const handleUpdateTask = () => {
    setTasks((prev) =>
      prev.map((task) => (task.id === editingTask.id ? { ...task, ...newTask } : task))
    );
    setEditingTask(null);
    setNewTask({
      title: '',
      description: '',
      priority: 'medium',
      status: 'todo',
      dueDate: '',
    });
    toast.success('Task updated successfully!');
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: '#ef5350',
      medium: '#fb8c00',
      low: '#66bb6a',
    };
    return colors[priority] || colors.medium;
  };

  const getStatusColor = (status) => {
    const colors = {
      todo: '#9e9e9e',
      inProgress: '#fb8c00',
      completed: '#66bb6a',
    };
    return colors[status] || colors.todo;
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
            background: darkMode
              ? 'linear-gradient(135deg, #fff 0%, #b3b3b3 100%)'
              : 'linear-gradient(135deg, #000 0%, #333 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Task Manager
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
          }}
        >
          Organize and track your tasks efficiently
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                backgroundColor: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
                border: '1px solid',
                borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
              }}
            >
              <Typography variant="h6" sx={{ mb: 3, color: darkMode ? '#fff' : '#000' }}>
                {editingTask ? 'Edit Task' : 'Add New Task'}
              </Typography>
              
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={newTask.title}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
                InputLabelProps={{
                  style: { color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' },
                }}
                InputProps={{
                  style: { color: darkMode ? '#fff' : '#000' },
                }}
              />

              <TextField
                fullWidth
                label="Description"
                name="description"
                value={newTask.description}
                onChange={handleInputChange}
                multiline
                rows={3}
                sx={{ mb: 2 }}
                InputLabelProps={{
                  style: { color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' },
                }}
                InputProps={{
                  style: { color: darkMode ? '#fff' : '#000' },
                }}
              />

              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel sx={{ color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' }}>
                  Priority
                </InputLabel>
                <Select
                  name="priority"
                  value={newTask.priority}
                  onChange={handleInputChange}
                  sx={{ color: darkMode ? '#fff' : '#000' }}
                >
                  <MenuItem value="low">Low</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="high">High</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel sx={{ color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' }}>
                  Status
                </InputLabel>
                <Select
                  name="status"
                  value={newTask.status}
                  onChange={handleInputChange}
                  sx={{ color: darkMode ? '#fff' : '#000' }}
                >
                  <MenuItem value="todo">To Do</MenuItem>
                  <MenuItem value="inProgress">In Progress</MenuItem>
                  <MenuItem value="completed">Completed</MenuItem>
                </Select>
              </FormControl>

              <TextField
                fullWidth
                label="Due Date"
                name="dueDate"
                type="date"
                value={newTask.dueDate}
                onChange={handleInputChange}
                sx={{ mb: 3 }}
                InputLabelProps={{
                  shrink: true,
                  style: { color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' },
                }}
                InputProps={{
                  style: { color: darkMode ? '#fff' : '#000' },
                }}
              />

              <Button
                fullWidth
                variant="contained"
                onClick={editingTask ? handleUpdateTask : handleAddTask}
                startIcon={editingTask ? <CheckIcon /> : <AddIcon />}
                sx={{
                  py: 1.5,
                  backgroundColor: darkMode ? '#fff' : '#000',
                  color: darkMode ? '#000' : '#fff',
                  '&:hover': {
                    backgroundColor: darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)',
                  },
                }}
              >
                {editingTask ? 'Update Task' : 'Add Task'}
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <AnimatePresence>
              {tasks.map((task) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      mb: 2,
                      backgroundColor: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
                      borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <Typography
                          variant="h6"
                          sx={{ color: darkMode ? '#fff' : '#000' }}
                        >
                          {task.title}
                        </Typography>
                        <Box>
                          <IconButton
                            onClick={() => handleEditTask(task)}
                            sx={{ color: darkMode ? '#fff' : '#000' }}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            onClick={() => handleDeleteTask(task.id)}
                            sx={{ color: darkMode ? '#fff' : '#000' }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      </Box>

                      <Typography
                        variant="body1"
                        sx={{
                          mb: 2,
                          color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
                        }}
                      >
                        {task.description}
                      </Typography>

                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        <Chip
                          label={task.priority.toUpperCase()}
                          sx={{
                            backgroundColor: getPriorityColor(task.priority),
                            color: '#fff',
                          }}
                        />
                        <Chip
                          label={task.status.replace(/([A-Z])/g, ' $1').toUpperCase()}
                          sx={{
                            backgroundColor: getStatusColor(task.status),
                            color: '#fff',
                          }}
                        />
                        {task.dueDate && (
                          <Chip
                            label={`Due: ${new Date(task.dueDate).toLocaleDateString()}`}
                            sx={{
                              backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                              color: darkMode ? '#fff' : '#000',
                            }}
                          />
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>

            {tasks.length === 0 && (
              <Typography
                variant="h6"
                sx={{
                  textAlign: 'center',
                  color: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                  mt: 4,
                }}
              >
                No tasks yet. Add your first task!
              </Typography>
            )}
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default TaskManager; 