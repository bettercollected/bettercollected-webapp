/**
 * Created By: Rupan Chaulagain
 * Date: 2022-11-02
 * Time: 09:49
 * Project: formintegratorwebapp
 * Organization: Sireto Technology
 */
import FormFieldsWrapper from '@app/components/forms/FormFieldsWrapper';

export default function Dropdown() {
    function DropdownContainer() {
        return (
            <>
                <button
                    id="dropdownHelperButton"
                    data-dropdown-toggle="dropdownHelper"
                    className="border-[#eaeaea] border-[1px] font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                >
                    Dropdown checkbox{' '}
                    <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="gray" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div id="dropdownHelper" className="hidden z-10 w-60 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHelperButton">
                        <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Dashboard
                            </a>
                        </li>
                        {/*<DropdownItem value={"Pick up the box"}/>*/}
                        {/*<DropdownItem value={"Run around the yard"}/>*/}
                        {/*<DropdownItem value={"Do a flat machine press"}/>*/}
                        {/*<DropdownItem value={"Ruminate"}/>*/}
                        {/*<DropdownItem value={"Missing"}/>*/}
                    </ul>
                </div>
            </>
        );
    }

    function DropdownItem({ value }: any) {
        return <li>{value}</li>;
    }

    return (
        <FormFieldsWrapper heading={'Select any dropdown options'}>
            <DropdownContainer />
        </FormFieldsWrapper>
    );
}
