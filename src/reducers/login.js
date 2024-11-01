const loginReducer = (state = false, action) => {
    //khi chưa đăng nhập ban đầu trạng thái là false
    // console.log(state, action);
    
    switch (action.type) {
      case "CHECK_LOGIN":
        return action.status;
      default:
        return state;
    }
  }
  export default loginReducer;
  