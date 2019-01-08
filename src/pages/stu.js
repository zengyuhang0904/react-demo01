import React,{Component} from 'react'
// 绑定数据源
import {connect} from 'react-redux'
import {findStus,deleteStuById} from '../store'


class Stu extends Component{
	findStus = ()=>{
		let action = findStus();
		// 分发action
		this.props.dispatch(action)
	}
	deleteStu = ()=>{
		// 分发action
		this.props.dispatch(deleteStuById())
	}
	render(){
		// 通过解构拿到props中的数据
		let {isLoading,stus} = this.props;
    console.log(this.props);
    return (
      <div>
        <h2>学生管理</h2>
        <div>学生信息:{JSON.stringify(stus)}</div>
        <button onClick={this.findStus}>查询</button>
        <button onClick={this.deleteStu}>删除</button>
      </div>
    );
  }
}
// 导致数据源中的数据注入到组件中的props中
export default connect(state=>state)(Stu);

// 数据来源:store(initState) -->目前组件(props) --> 目前组件第7行代码