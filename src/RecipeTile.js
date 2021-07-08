const RecipeTile = ({recipe}) => {
    return ( 
        <div className='recipe-tile'>
            <img src={recipe['recipe']['image']} alt={recipe['recipe']['label']} />
            <p>{recipe['recipe']['label']}</p>
        </div>
     );
}
 
export default RecipeTile;