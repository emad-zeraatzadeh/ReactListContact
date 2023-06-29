import React from 'react';

export const ContactList = ({list}) => {



    return (
        <div>
            {list.map(item => {
                    return (
                        <div key={item.id}>
                            <p>{item.name}</p>
                            <p>{item.phone}</p>
                            <p>{item.email}</p>
                        </div>
                    )
                }
            )}
        </div>
    );
};
