import React from 'react'

const Form = () => {
    return (
        <div className="w-50 m-5">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Blog Title</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Blog Author</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="form-group ">
                    <label for="exampleFormControlTextarea1 mb-3">Blog content</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <button type="submit" class="btn btn-primary mt-3">Submit</button>
            
        </div>
    )
}

export default Form
