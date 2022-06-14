import { connect } from "react-redux";
import { Add, Remove } from "../redux/action/action";
import RecipeInfo from "../components/recipeInfo";

const mapDispatchToProps = dispatch =>({
    Addhandler:data=>dispatch(Add(data)),
    RemoveHandler:data=>dispatch(Remove(data))
})

const mapStateToProps=state=>({
    data:state.cartItem
})

export default connect(mapStateToProps , mapDispatchToProps)(RecipeInfo);
