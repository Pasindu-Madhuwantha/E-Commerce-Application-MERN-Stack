import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../layout/MetaData'

const NewInquiry = () => {
  return (
    <Fragment>
            <MetaData title={'New Product'} />

                <div>
                    <Fragment>
                        <div className="wrapper my-5">
                            <form className="shadow-lg" encType='multipart/form-data'>
                            <div className="form-group">
                                    <label htmlFor="name_field">Inquiry ID</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value="6457435adcf16a9a86c8259e"
                                        readOnly
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name_field">Name</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value="Kamal Perera"
                                        readOnly
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="price_field">Email</label>
                                    <input
                                        type="text"
                                        id="price_field"
                                        className="form-control"
                                        value="kamal@gmail.com"
                                        readOnly
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price_field">Mobile Number</label>
                                    <input
                                        type="text"
                                        id="price_field"
                                        className="form-control"
                                        value="0776564668"
                                        readOnly
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description_field">Inquiry</label>
                                    <textarea className="form-control" id="description_field" rows="4"
                                    value="Product not delivered"></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_field">Status</label>
                                    <select className="form-control" id="category_field" >
                                        <option>Not Replied</option>
                                    </select>
                                </div>
                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3"
                                >
                                    UPDATE
                                </button>

                            </form>
                        </div>
                    </Fragment>
                </div>

        </Fragment>
  )
}

export default NewInquiry