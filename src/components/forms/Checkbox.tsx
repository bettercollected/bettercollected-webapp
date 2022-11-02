/**
 * Created By: Rupan Chaulagain
 * Date: 2022-11-01
 * Time: 21:11
 * Project: formintegratorwebapp
 * Organization: Sireto Technology
 */
import FormFieldsWrapper from './FormFieldsWrapper';

export default function Checkbox() {
    function CheckboxItems(props: any) {
        const { item } = props;
        return (
            <div className="flex items-center mb-2">
                <input disabled={true} id={item} type="checkbox" value="" className="w-4 h-4 text-blue-600 rounded border-[#eaeaea]" />
                <label htmlFor={item} className="ml-2 text-md text-gray-900">
                    {item}
                </label>
            </div>
        );
    }

    return (
        <FormFieldsWrapper heading={'What are the things you like?'}>
            <CheckboxItems item={'Football'} />
            <CheckboxItems item={'Basketball'} />
            <CheckboxItems item={'Snooker'} />
            <CheckboxItems item={'Tennis'} />
        </FormFieldsWrapper>
    );
}
