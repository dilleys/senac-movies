import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import BuscaItem from './BuscaItem'
import { movies } from './Data/movies';
import { filter } from 'minimatch';
import { Link } from 'react-router-dom';
import { api } from './services';

const useStyles = makeStyles((theme) => ({
	form: {
		display: 'flex',
		justifyContent: 'space-between',

		'& > *': {
			margin: theme.spacing(1),
		},
	},

	titulo: {
		flexGrow: 1,
	},

	resultado: {
		display: 'flex',
		flexWrap: 'wrap',
		textDecoration: 'none',

		'& > *': {
			margin: theme.spacing(1),
		},
	},

}));

export default function BuscaForm() {
  const classes = useStyles();

  const [search,setSearch] = useState('');
  const [moviesFiltered, setMoviesFiltered] = useState(movies);
  const [initialMovies,setinitialMovies] = useState(movies)
  const [error, setError]= useState(false)

  const getMoviesFromApi =(event) =>{
	  event.preventDefault();
	  if(search.length>2){
		  setError(false)
		api.get(`/?apikey=67f2f4c&&s=${search}`).then((response)=>{
		setMoviesFiltered(response.data.Search);
		setinitialMovies([...initialMovies,...response.data.Search])
   });
  }
  else{
	  setError(true);
  }
}
    

  useEffect(()=>{
	  if(search ===''){
		  setMoviesFiltered(initialMovies);
	  }
	  else{
		setMoviesFiltered(
			initialMovies.filter(m=>m.Title.toLowerCase().includes(search))
		)
		
	  }

  },[search])

  return (
	  <>
		<form className={classes.form} noValidate autoComplete="off" onSubmit={getMoviesFromApi}> 
			<TextField 
			error={error}
			helperText={error?"Digite pelo menos três caracteres":""}
			className={classes.titulo} 
			id="outlined-basic" 
			label="Título" 
			variant="outlined" 
			value={search}
			onChange={(e)=>setSearch(e.target.value.toLowerCase())}
		/>
			<Button variant="contained" color="primary" onClick={getMoviesFromApi}>Buscar</Button>
		</form>

		<div className={classes.resultado}>
			{moviesFiltered.map(m=>
			<Link to={`/single?Title=${m.Title}&Poster=${m.Poster}`}>
			<BuscaItem title={m.Title} year={m.Year} type={m.Type} poster={m.Poster}/>
			</Link>)}
		</div>
	</>
  );
}
