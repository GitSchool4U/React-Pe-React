import { createSlice } from '@reduxjs/toolkit'
import { deleteEmployee, getEmployees, postEmployee, updateEmployee } from './employee.thunk';

const initialState = {
    employees: [],
    loading: false,
    error: null,
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getEmployees.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(getEmployees.fulfilled, (state, action) => {
            state.employees = action.payload
            state.loading = false;
        })
        builder.addCase(getEmployees.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        // post employees
        builder.addCase(postEmployee.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(postEmployee.fulfilled, (state, action) => {
            state.loading = false;
        })
        builder.addCase(postEmployee.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        // delete employees
        builder.addCase(deleteEmployee.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(deleteEmployee.fulfilled, (state, action) => {
            state.loading = false;
        })
        builder.addCase(deleteEmployee.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        // delete employees
        builder.addCase(updateEmployee.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(updateEmployee.fulfilled, (state, action) => {
            state.loading = false;
        })
        builder.addCase(updateEmployee.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
    }
})

export const { } = employeeSlice.actions;
export default employeeSlice.reducer