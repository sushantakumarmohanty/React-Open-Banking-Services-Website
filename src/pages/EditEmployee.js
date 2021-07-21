import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleUsers, updateUsers } from '../redux/Actions';

const useStyles = makeStyles((theme) => ({
    
  root: {
      marginTop: 50,
    '& > *': {
      margin: theme.spacing(1),
      width: '45ch',
    },
  },
}));

const EditEmployee = () => {
    const classes = useStyles();
    let {id} = useParams();
    const {emps} = useSelector(state => state.emps);
    let history = useHistory();
    let dispatch = useDispatch();
    const[state,setState] = useState({
        empId:"",
        empName:"",
        empSal:"",
        
    });

    const[value,setValue] = useState({
        isMarried:"false"
    })
    const[error, setError] = useState("");

    useEffect(() => {
       if(emps)
       {
           setState({...emps});
       } 
       
    }, [emps])
     
    useEffect(() => {
        
        dispatch(getSingleUsers(id));
       
    }, [])
 
    const handleChange = (event) => {
       let {name, value, type} = event.target;
        if(type === Radio)
        {
            setValue(event.target.value);
        }
        else
        {
            setState({...state, [name]:value})
        }
        
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!empId || !empName || !empSal || !isMarried)
        {
            setError("please set correct input");
        }
        else
        {
            dispatch(updateUsers(state,id));
            history.push("/");
            setError("");
        }
    }

    const {empId, empName, empSal, isMarried} = state;  

    return ( 
        <div>
            <Button style={{width:"100px", marginTop:"20px"}} 
                 variant="contained" 
                 color="secondary" 
                 onClick={()=>history.push("/")}>
                     Go Back
                 </Button>
            <h1>Edit Employee Information Here</h1>
            {error && <h3 style={{color:"red"}}>{error}</h3>}
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                 <TextField id="standard-basic" label="Employee ID" value={empId || ""} name="empId" type="number" onChange={handleChange} />
                 <br/>
                 <TextField id="standard-basic" label="Employee Name" value={empName || ""} name="empName" type="text" onChange={handleChange}/>
                 <br/>
                 <TextField id="standard-basic" label="Employee Salary" value={empSal || ""} name="empSal" type="number" onChange={handleChange}/>
                 <br/>
                 <FormControl component="fieldset">
                    <FormLabel component="legend">Maritial Status</FormLabel>
                      <RadioGroup aria-label="isMarried" name="isMarried" value={isMarried || ""} onChange={handleChange}>
                         <FormControlLabel value="Yes" control={<Radio />} label="Married" />
                         <FormControlLabel value="No" control={<Radio />} label="Unmarried" />
                      </RadioGroup>
                 </FormControl>
                 <br/>

                 <Button style={{width:"200px"}} 
                 variant="contained" 
                 color="primary" 
                 type="submit">
                     Update
                 </Button>

            </form>
        </div>
     );
}
 
export default EditEmployee;