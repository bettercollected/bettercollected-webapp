/**
 * Created By: Rupan Chaulagain
 * Date: 2022-11-01
 * Time: 21:03
 * Project: formintegratorwebapp
 * Organization: Sireto Technology
 */
import Checkbox from '@app/components/forms/Checkbox';
import Dropdown from '@app/components/forms/Dropdown';

export default function FormRenderer() {
    return (
        <div className={'m-6'}>
            <div className={'mb-6'}>
                <h1 className={'text-4xl font-bold'}>Sample Form</h1>
                <p className={'text-gray-500 text-lg'}>This is a description of the form</p>
            </div>
            <Checkbox />
            <Dropdown />
        </div>
    );
}
