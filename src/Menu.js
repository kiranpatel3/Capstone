import Swal from 'sweetalert2';
import menuItems from './MenuItems';

const Menu = () =>{

    const handleOrder = (id) => {
        console.log(id, "id is clicked");
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, order it!'
        }).then((result) => {
            Swal.fire(
                'Ordered!',
                'Your order is in making.',
                'success'
            )
        })
    }

    return(
        <div className="menu-container">
            <div className="menu-header">
                <h2>This weeks specials!</h2>
                <button>Order Menu</button>
            </div>
            <div className='cards'>
                {
                    menuItems.map(menuItem => <div key={menuItem.id} className='menu-items'>
                        <img src={menuItem.image} alt=''/>
                        <div className='menu-content'>
                            <div className='heading'>
                                <h5>{menuItem.title}</h5>
                                <p>{menuItem.price}</p>
                            </div>
                            <p>{menuItem.description}</p>
                            <button className='orderbtn' onClick={() => handleOrder(menuItem.id)}>Order Now</button>
                        </div>
                        <h2>{menuItem.title}</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Menu;