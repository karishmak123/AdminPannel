import React from 'react'
import { TbShoppingBagX } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { TbShoppingBagPlus } from "react-icons/tb";
import { HiMiniInboxArrowDown } from "react-icons/hi2";

const OrderSummury = () => {
    return (
        <>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
                <div className="stat-card">
                    <div className="order-icon add"><TbShoppingBagPlus /></div>
                    <div className="stat-title">Total Orders</div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="data"> 75 </div>
                        <div class="text-success percentage ms-4">▲ 3%</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
                <div className="stat-card">
                    <div className="order-icon done"><TbShoppingBagCheck /></div>
                    <div className="stat-title">Total Delivered</div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div className="data">70</div>
                        <div className="text-danger percentage ms-4">▼ 3%</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
                <div className="stat-card">
                    <div className="order-icon cancelled"><TbShoppingBagX /> </div>
                    <div className="stat-title">Total Cancelled</div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="data">05</div>
                        <div className="text-success percentage ms-4">▲ 3%</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
                <div className="stat-card">
                    <div className="order-icon revenue"><HiMiniInboxArrowDown/></div>
                    <div className="stat-title">Total Revenue</div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="data">$12k</div>
                        <div class="text-danger percentage ms-4">▼ 3%</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-12 mb-3">
                <div className="stat-card wide">
                    <div class="d-flex justify-content-between">
                        <div className="d-inline-block">
                            <div className="stat-title">Net Profit</div>
                            <div className="stat-value">$6759.25</div>
                            <div className="stat-change text-success">▲ 3%</div>
                        </div>
                        <div className="d-inline-block stat-percentage">
                            <div className="circle-chart">70%</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderSummury