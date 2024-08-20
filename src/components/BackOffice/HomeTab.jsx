import React from 'react';

const HomeTab = () => {
    return (
        <div className="tab-pane fade show active" id="chat" role="tabpanel" aria-labelledby="chat-tab">
            <div className="main-wrapper p-0">
                <div className="fixed-header">
                    <div className="d-flex align-items-center gap-2">
                        <h3>Admin - Dashboard</h3> 
                    </div>
                    <a className="premium-btn" data-cursor="pointer" href="#">
                        <i className="iconsax" data-icon="crown-2" icon-name="crown-2"></i>
                        <span>SUPER ADMIN</span>
                    </a>
                </div> 
            </div> 
        </div> 
)};

export default HomeTab;
