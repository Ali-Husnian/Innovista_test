'use client';
import {useState} from 'react';
import {
 Box,
 Button,
 ButtonGroup,
 Menu,
 MenuItem,
 Typography,
 Paper,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const CourseSelector = ({data}) => {
 const [anchorEl, setAnchorEl] = useState(null);
 const [selectedCourse, setSelectedCourse] = useState(data.courses[0]);
 const [selectedNav, setSelectedNav] = useState(
  data.courses[0].navigation[0].id
 );
 const open = Boolean(anchorEl);

 const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
  setAnchorEl(null);
 };

 const handleCourseSelect = (course) => {
  setSelectedCourse(course);
  setSelectedNav(course.navigation[0].id); // Reset to first nav item of new course
  handleClose();
 };

 const handleNavSelect = (navId) => {
  setSelectedNav(navId);
 };

 // Get current navigation items for selected course
 const currentNavigation = selectedCourse.navigation || [];

 // Dynamic content based on selected navigation
 const renderContent = () => {
  switch (selectedNav) {
   case 'earning-potential':
    return (
     <Typography>Earning potential for {selectedCourse.title}</Typography>
    );
   case 'profile':
    return (
     <Typography>Profile information for {selectedCourse.title}</Typography>
    );
   case 'projects':
    return <Typography>Projects related to {selectedCourse.title}</Typography>;
   case 'team':
    return <Typography>Team behind {selectedCourse.title}</Typography>;
   case 'training':
    return <Typography>Training details for {selectedCourse.title}</Typography>;
   case 'requirement':
    return <Typography>Requirements for {selectedCourse.title}</Typography>;
   case 'faq':
    return <Typography>FAQs about {selectedCourse.title}</Typography>;
   case 'authentication':
    return (
     <Typography>Authentication process for {selectedCourse.title}</Typography>
    );
   case 'agreement':
    return <Typography>Agreement terms for {selectedCourse.title}</Typography>;
   default:
    return <Typography>{selectedCourse.content}</Typography>;
  }
 };

 return (
  <Box sx={{p: 3}}>
   {/* Course Dropdown */}
   <Box sx={{display: 'flex', alignItems: 'center', mb: 3}}>
    <Button
     variant="contained"
     onClick={handleClick}
     endIcon={<ArrowDropDownIcon />}
     sx={{
       minWidth: 202,
    
       justifyContent: 'space-between',
      
      textTransform: 'none',
     }}
    >
     {selectedCourse.title}
    </Button>
    <Menu
     anchorEl={anchorEl}
     open={open}
     onClose={handleClose}
     PaperProps={{
      style: {
       maxHeight: 400,
       width: '20ch',
      },
     }}
    >
     {data.courses.map((course) => (
      <MenuItem
       key={course.id}
       onClick={() => handleCourseSelect(course)}
       selected={course.id === selectedCourse.id}
      >
       {course.title}
      </MenuItem>
     ))}
    </Menu>

    <Typography variant="h6" sx={{ml: 2}}>
     {selectedCourse.title} Course Details
    </Typography>
   </Box>

   {/* Navigation Buttons - Now course-specific */}
   <Box sx={{overflowX: 'auto', mb: 3}}>
    <ButtonGroup variant="text">
     {currentNavigation.map((nav) => (
      <Button
       key={nav.id}
       onClick={() => handleNavSelect(nav.id)}
       sx={{
        textTransform: 'none',
        fontWeight: nav.id === selectedNav ? 'bold' : 'normal',
        borderBottom: nav.id === selectedNav ? '2px solid' : 'none',
        borderColor: nav.id === selectedNav ? 'primary.main' : 'transparent',
        whiteSpace: 'nowrap',
       }}
      >
       {nav.title}
      </Button>
     ))}
    </ButtonGroup>
   </Box>

   {/* Content Display */}
   <Paper elevation={3} sx={{p: 3, minHeight: 200}}>
    {renderContent()}
   </Paper>
  </Box>
 );
};

export default CourseSelector;
