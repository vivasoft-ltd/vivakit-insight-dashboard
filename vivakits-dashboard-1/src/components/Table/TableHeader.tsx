import {
  Textarea,
  TimePickerValueType,
  useVKNotifications,
  VKButton,
  VKCheckbox,
  VKDatepicker,
  VKFlex,
  VKInput,
  VKInputMask,
  VKLabel,
  VKRadioButton,
  VKSelect,
  VKSwitch,
  VKTimePicker,
} from '@vivakits/react-components';
import CreateItemDrawer from '../CreateItemDrawer';
import { useState } from 'react';

export const TableHeader = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState();
  const [isSwitchChecked, setSwitchChecked] = useState(false);
  const [date, setDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState<TimePickerValueType>('11:00 AM');
  const { notify } = useVKNotifications();

  return (
    <VKFlex
      direction="row"
      justify="end"
      align="center"
      gap={4}
      className="bg-[#1F2937] py-2 rounded mt-2 w-full px-2"
    >
      <CreateItemDrawer
        size="md"
        title={'Add User'}
        onClose={() => {
          setOpenDrawer(false);
        }}
        isOpen={openDrawer}
      >
        <VKFlex
          direction={'column'}
          justify="space-between"
          align="center"
          className="h-[calc(100%-8rem)]"
        >
          <VKFlex direction="column" gap={3} className="p-4 w-full">
            <VKInput size="md" rounded="md" label="Name" placeholder="Name" />
            <VKInputMask
              size="md"
              label="IP"
              mask="999.999.9.9"
              placeholder="IP Address"
              onChange={() => {}}
            />
            <VKSelect
              label="Gender"
              options={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
              ]}
              onChange={(option) => setValue(option as any)}
              value={value}
            />
            <VKFlex direction="column" gap={2} className="w-full">
              <VKLabel>Joining Date:</VKLabel>
              <VKDatepicker
                value={date}
                format="DD-MM-YYYY"
                onChange={({ date, dateString }) => {
                  console.log('dateString', dateString);
                  setDate(date as Date);
                }}
              />
            </VKFlex>
            <VKFlex direction="column" gap={2} className="w-full">
              <VKLabel>Joining Time: </VKLabel>
              <VKTimePicker
                size="md"
                onChange={(time) => {
                  setTime(time as any);
                }}
                classNames={{
                  container: 'w-full',
                  inputWrapper: 'border-red-200',
                }}
                placeholder="Start Time"
                value={time}
              />
            </VKFlex>
            <Textarea size="2xl" wrapperClassName={'w-full'} label="Remarks:" />
            <VKFlex
              direction={'row'}
              justify="space-between"
              align="center"
              className="w-full"
            >
              <VKSwitch
                label="Is Active"
                color="secondary"
                labelPlacement="right"
                isChecked={isSwitchChecked}
                onToggle={() => setSwitchChecked(!isSwitchChecked)}
              />
              <VKCheckbox size="lg">Worked Before</VKCheckbox>
              <VKRadioButton size="lg" variant="circle">
                In Military
              </VKRadioButton>
            </VKFlex>
          </VKFlex>
          <VKFlex justify="end" className="w-full">
            <VKButton
              variant="solid"
              color="secondary"
              rounded="md"
              className="w-1/3 h-[50px]"
              onClick={() => {
                notify({
                  title: 'Added Success',
                  color: 'success',
                  description: 'This is an example of notification',
                  autoClose: true,
                  duration: 3000,
                  placement: 'topRight',
                });
                setOpenDrawer(false);
              }}
            >
              Add
            </VKButton>
          </VKFlex>
        </VKFlex>
      </CreateItemDrawer>
      <>
        <VKInput
          placeholder="Search by Name"
          size={'sm'}
          rounded={'lg'}
          className="w-1/2"
        />
      </>
      <VKButton
        onClick={() => {
          setOpenDrawer(true);
        }}
        rounded={'lg'}
        color="secondary"
        className="w-1/2 py-[7px] rounded"
      >
        Add Employee
      </VKButton>
    </VKFlex>
  );
};
