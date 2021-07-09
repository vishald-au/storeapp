const Logout = ({handleTokenLocalClear}) => {
    return (
        <div className='p-1'><buttom onClick={() => handleTokenLocalClear()} className='btn btn-danger'>Logout</buttom></div>
    )
}

export default Logout
