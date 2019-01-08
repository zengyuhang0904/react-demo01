// 导入reduxAPI
import {createStore} from 'redux'

// redux入门
console.log("redux入门");

// 状态(state)[对象] 动作(action)[对象] 关联动作和状态(reducer)[函数]

// 定义初始化状态
let initState = {
	isLoading:false,
	stus:[]
}

// 定义动作,产生函数
let FIND_STUS = 'FIND_STUS';
let DELETE_STUBYID = 'DELETE_STUBYID';
// 将方法暴露
export function findStus(){
	// action 动作
	return {
		type:'FIND_STUS'
	}
}
// 将方法暴露
export function deleteStuById(){
	// action 动作
	return {
		type:DELETE_STUBYID
	}
}

// reducer,用于将动作与状态相关联

// rootReducer为根reducer,必须返回最新的state
/*
1.先给state设置一个初始值
2.给不同的action提供不同的操作state方式
*/
function rootReducer(state=initState,action){
	switch(action.type){
		case FIND_STUS:
			return{
				...state,
				stus:'查询学生'
			}
		case DELETE_STUBYID:
			return{
				...state,
				stus:'删除ById'
			}
		default:
			return state;
	}
}






// redux应用

// 创建数据仓库
let store = createStore(rootReducer)
// 将store暴露出去 
export default store;

/*
// 测试:
console.log("___",store);
// 打印之后store中有一个dispatch (起分发作用)
// 分发之前的getState
console.log(1,store.getState());
// state为初始值:[]
// 分发(findStus()函数)
store.dispatch(findStus())

// store.dispatch(findStus())等同于:
//store.dispatch({
//	type:FIND_STUS
//})
  
// 分发之后的getState
console.log(2,store.getState());
// state为修改后的值:'查询学生'
// 分发(deleteStuById()函数)
store.dispatch(deleteStuById())
console.log(3,store.getState());
// state值修改为"删除ById"
*/