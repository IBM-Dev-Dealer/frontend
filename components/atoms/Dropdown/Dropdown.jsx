/* eslint-disable max-len */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import InfoNote from "../InfoNote/InfoNote";

const Dropdown = ({ list, selected, select, placeholder, infoMessage }) => {
  return (
    <div className='flex flex-row items-center gap-2 my-2 w-full'>
      <Menu as='div' className='relative inline-block text-left w-full'>
        <Menu.Button className='inline-flex w-full justify-center rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
          {!selected ? placeholder : selected.label}
          <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items
            className={`absolute z-10 mt-2 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden w-full`}
          >
            <div className='py-1 max-h-52 overflow-y-auto'>
              <Menu.Item as='div' key={placeholder} className='overflow-hidden'>
                {({ active }) => (
                  <div
                    role='presentation'
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      `block px-4 py-2 text-sm overflow-hidden border-b border-transparent-gray-05 font-semibold text-gray 
                    tracking-wide`,
                    )}
                  >
                    {placeholder}
                  </div>
                )}
              </Menu.Item>
              {list &&
                list.map((listItem) => {
                  return (
                    <Menu.Item as='div' key={listItem.label} className='overflow-hidden'>
                      {({ active }) => (
                        <div
                          role='presentation'
                          onClick={() => {
                            select(listItem);
                          }}
                          onKeyDown={() => {
                            select(listItem);
                          }}
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                            "block px-4 py-2 text-sm hover:bg-transparent-light-green-50 cursor-pointer overflow-hidden",
                          )}
                        >
                          {listItem.label}
                        </div>
                      )}
                    </Menu.Item>
                  );
                })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {infoMessage && <InfoNote message={infoMessage} />}
    </div>
  );
};

export default Dropdown;
