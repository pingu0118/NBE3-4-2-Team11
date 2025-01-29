package com.pofo.backend.common.exception;

import com.pofo.backend.common.response.ResponseMessage;

public class ServiceException extends RuntimeException {
    private final String resultCode;
    private final String msg;

    public ServiceException(String resultCode, String msg) {
        super(resultCode + " : " + msg);
        this.resultCode = resultCode;
        this.msg = msg;
    }

    public ResponseMessage<Void> getRsData() {
        return new ResponseMessage<>(resultCode, msg, null);
    }
}

