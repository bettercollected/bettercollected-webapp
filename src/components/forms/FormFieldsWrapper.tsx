/**
 * Created By: Rupan Chaulagain
 * Date: 2022-11-01
 * Time: 21:09
 * Project: formintegratorwebapp
 * Organization: Sireto Technology
 */

export default function FormFieldsWrapper(props: any) {
    const { heading } = props;

    return (
        <div className={'mb-6'}>
            <h2 className={'text-2xl font-semibold mb-2'}>{heading}</h2>
            {props.children}
        </div>
    );
}
