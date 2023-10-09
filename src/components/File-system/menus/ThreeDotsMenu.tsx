"use client"
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image'
import DeleteFileAlert from '@/components/Alerts/DeleteFileAlert';
import FileDetailsModal from '@/components/Modals/FileDetailsModal';

type Props = {
  file: FileOrFolderType;
}

const ThreeDotsMenu = ({file}: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='text-secondary_font font-medium text-2xl leading-[0px] pb-[1.3rem] p-[0.3rem] px-1 text-center rounded-full hover:bg-button_hover cursor-pointer'>...</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Image src='/open-icon.svg' width={16} height={16} alt='Open icon'/>
          Open
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Image src='/download-icon.svg' width={16} height={16} alt='Download icon'/>
          Download
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Image src='/details-icon.svg' width={16} height={16} alt='Details icon'/>
          <FileDetailsModal file={file}/>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Image src='/move-icon.svg' width={16} height={16} alt='Move icon'/>
          Move
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Image src='/copy-icon.svg' width={16} height={16} alt='Copy icon'/>
          Copy
        </DropdownMenuItem>
        <DropdownMenuItem className='text-[#FF6161] focus:text-[#FF6161]' onClick={(e) => e.stopPropagation()}>
          <Image src='/delete-icon.svg' width={16} height={16} alt='Delete icon'/>
          <DeleteFileAlert file={[file]} multiplefiles={false}/>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Image src='/share-icon.svg' width={16} height={16} alt='Rename icon'/>
          Share
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThreeDotsMenu
