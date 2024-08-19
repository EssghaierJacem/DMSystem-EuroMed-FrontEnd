import React from 'react';

const HistoryTab = () => {
    return (
        <div className="tab-pane fade show active" id="history" role="tabpanel" aria-labelledby="history-tab">
            <div className="main-wrapper p-0">
                <div className="fixed-header">
                    <div className="d-flex align-items-center gap-2">
                        <h3>History Tab</h3>
                    </div>
                    <a className="premium-btn" data-cursor="pointer" href="">
                        <i className="iconsax" data-icon="crown-2"></i>
                        Get <span>premium</span>
                    </a>
                </div>
                <div className="main-section">
                    <div className="container card p-0">
                        <div className="card-header">
                            <h3 className="text-white">Detailed History</h3>
                            <form className="auth-form d-none d-md-block">
                                <div className="form-group">
                                    <i className="iconsax" data-icon="search-normal-2"></i>
                                    <input type="search" className="form-control" placeholder="Search here" />
                                </div>
                            </form>
                        </div>
                        <div className="card-body px-sm-4 px-3">
                            <ul className="history-sec">
                                {/* History items go here */}
                                <li className="history-main">
                                    <div className="history-detail text-truncate">
                                        <i className="iconsax" data-icon="message-text"></i>
                                        <div>
                                            <p>What is app development?</p>
                                            <p className="d-sm-none d-inline-block">2 min ago</p>
                                        </div>
                                    </div>
                                    <div className="history-time d-sm-flex d-none">
                                        <ul>
                                            <li>Chat</li>
                                            <li>2 min ago</li>
                                        </ul>
                                    </div>
                                </li>
                                {/* Add more history items as needed */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryTab;
